export const YauxTranslateKeyCreator = {
  createFormLabelKey: (elementId: string) => {
    return 'form.element.label.' + elementId;
  },
  createValidationLabelKey: (validator: string) => {
    return 'form.validation.' + validator + '.error.message';
  }
};
