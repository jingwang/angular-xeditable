// checklist
angular.module('xeditable').directive('editableChecklist', [
  'editableDirectiveFactory',
  'editableNgOptionsParser',
  function(editableDirectiveFactory, editableNgOptionsParser) {
    return editableDirectiveFactory({
      directiveName: 'editableChecklist',
      inputTpl: '<span></span>',
      useCopy: true,
      render: function() {
        this.parent.render.call(this);
        var parsed = editableNgOptionsParser(this.attrs.eNgOptions);
          var html = '<label ng-repeat="'+parsed.ngRepeat+'" ng-class="' + parsed.locals.groupFn + '">'+
              '<input type="checkbox" ng-disabled="' + this.attrs.eNgDisabled + '" ng-change="' + this.attrs.eNgChange + '" checklist-model="$parent.$data" checklist-value="'+parsed.locals.valueFn+'">'+
              '<span ng-bind="'+parsed.locals.displayFn+'"></span></label>';

        this.inputEl.removeAttr('ng-model');
        this.inputEl.removeAttr('ng-options');
        this.inputEl.removeAttr('ng-change');
        this.inputEl.removeAttr('ng-disabled');
        this.inputEl.html(html);
      }
    });
}]);