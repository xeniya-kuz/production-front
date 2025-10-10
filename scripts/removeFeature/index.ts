import { Project, SyntaxKind } from 'ts-morph'
import { removeToggleFunction } from './removeToggleFunction'
import { featureState, removedFeatureName } from './const'
import { isToggleFunction } from './isToggleFunction'
import { isToggleComponent } from './isToggleComponent'
import { replaceComponent } from './replaceComponent'

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

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            return removeToggleFunction(node)
        }

        if (
            node.isKind(SyntaxKind.JsxSelfClosingElement) &&
            isToggleComponent(node)
        ) {
            return replaceComponent(node)
        }
    })
})

project.save()
