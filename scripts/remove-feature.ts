import { Node, Project, SyntaxKind } from 'ts-morph'

const removedFeatureName = process.argv[2] // isArticleEnabled
const featureState = process.argv[3] // off/on

if (!removedFeatureName) {
    throw new Error('Add a feature-flag name')
}

if (!featureState) {
    throw new Error('Add a feature-flag state (on|off)')
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Incorrect value of a feature-flag state (on|off)')
}

// npx ts-node ./file-path
const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isToggle(node: Node) {
    let isToggleFeatures = false

    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === 'toggleFeatures'
        ) {
            isToggleFeatures = true
        }
    })

    return isToggleFeatures
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggle(node)) {
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
    })
})

project.save()
