import { JsxAttribute, Node, SyntaxKind } from 'ts-morph'
import { featureState, removedFeatureName } from './const'

const getReplaceComponent = (attribute: JsxAttribute | undefined) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText()

    if (value?.startsWith('(')) {
        return value.slice(1, -1)
    }

    return value
}

const getAttributeByName = (
    jsxAttributes: JsxAttribute[],
    name: 'feature' | 'on' | 'off',
) => jsxAttributes.find((node) => node.getName() === name)

export const replaceComponent = (node: Node) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute)

    const onAttribute = getAttributeByName(attributes, 'on')
    const offAttribute = getAttributeByName(attributes, 'off')

    const featureNameAttribute = getAttributeByName(attributes, 'feature')
    const featureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        ?.slice(1, -1)

    if (featureName !== removedFeatureName) return

    const onValue = getReplaceComponent(onAttribute)
    const offValue = getReplaceComponent(offAttribute)

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue)
    }

    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue)
    }
}
