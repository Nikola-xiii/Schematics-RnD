import { Rule, SchematicContext, Tree, apply, template, mergeWith, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function apiModule(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTpl = url('./templates');
    const sourceParamsTpl = apply(sourceTpl, [template({ ..._options, ...strings})]);
    console.log(tree);
    
    return mergeWith(sourceParamsTpl);
  };
}
