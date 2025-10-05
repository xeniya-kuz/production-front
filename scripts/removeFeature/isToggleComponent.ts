import { Node, SyntaxKind } from 'ts-morph'
import { toggleComponentName } from './const'

export function isToggleComponent(node: Node) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier)

    return identifier?.getText() === toggleComponentName
}
