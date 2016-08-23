export const LINK_ERRORS = {
  SAME_DIRECTION: 'Can\'t create link between pins of the same direction!',
  SAME_NODE: 'Can\'t create link between pins of the same node!',
  ONE_LINK_FOR_INPUT_PIN: 'Input pin can have only one link!',
};

export const SAVE_LOAD_ERRORS = {
  NOT_A_JSON: 'File that you try to load is not in a JSON format!',
  INVALID_FORMAT: 'File that you try to load are corrupted and have a wrong structure!',
};

export const PROJECT_BROWSER_ERRORS = {
  CANT_DELETE_CURRENT_PATCH: 'Current patch cannot been deleted. Switch to another patch before!',
};

export const NODETYPE_ERRORS = {
  CANT_DELETE_USED_PATCHNODE: 'Current Patch Node is used somewhere. You should remove it first!',
  CANT_DELETE_USED_PIN_OF_PATCHNODE: ['Current IO Node is represents a Pin of Patch Node.',
                                      'And it is used somewhere.',
                                      'You should remove a linkage first!'].join(' '),
};