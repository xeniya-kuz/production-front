import { Node, SyntaxKind } from 'ts-morph'
import { featureState, removedFeatureName } from './const'

export const removeToggleFunction = (node: Node) => {
    const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression,
    )

    if (!objectOptions) return

    const featureNameProperty = objectOptions.getProperty('name')
    const onFunctionProperty = objectOptions.getProperty('on')
    const offFunctionProperty = objectOptions.getProperty('off')

    const onFunction = onFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
    )
    const offFunction = offFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
    )
    const featureName = featureNameProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1)

    if (featureName !== removedFeatureName) return

    if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '')
    }

    if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '')
    }
}
