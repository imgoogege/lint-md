const { Plugin } = require('ast-plugin');

const type = 'no-empty-url';

/**
 * link image 中地址不能为空
 * no-empty-url.js
 */
module.exports = class extends Plugin {

  pre() {}

  visitor() {
    return {
      link: ast => {
        const { url, value } = ast.node;

        const line = ast.node.position.start.line;
        const column = ast.node.position.start.column;

        if (!url) {
          this.cfg.throwError({
            line,
            column,
            level: 'error',
            text: 'link url can not be empty',
            type,
          });
        }
      },
      image: ast => {
        const { url, value } = ast.node;

        const line = ast.node.position.start.line;
        const column = ast.node.position.start.column;

        if (!url) {
          this.cfg.throwError({
            line,
            column,
            level: 'error',
            text: 'image url can not be empty',
            type,
          });
        }
      },
    }
  }

  post() {}
};
