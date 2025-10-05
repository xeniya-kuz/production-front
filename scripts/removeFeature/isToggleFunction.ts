import { Node, SyntaxKind } from 'ts-morph'
import { toggleFunctionName } from './const'

export function isToggleFunction(node: Node) {
    let isToggleFeatures = false

    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === toggleFunctionName
        ) {
            isToggleFeatures = true
        }
    })

    return isToggleFeatures
}
