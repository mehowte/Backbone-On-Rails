Backbone.Model.prototype.oldParse = Backbone.Model.prototype.parse
Backbone.Model.prototype.parse = function() {
  var params = this.oldParse.apply(this, arguments);
  var result = {}
  if (this.paramsNamespace)
    result = params[this.paramsNamespace];
  else
    result = params;
  return result;
}

Backbone.Model.prototype.oldToJSON = Backbone.Model.prototype.toJSON
Backbone.Model.prototype.toJSON = function() {
  var json = this.oldToJSON();
  var result = {}
  if (this.paramsNamespace)
    result[this.paramsNamespace] = json;
  else
    result = json;
  return result;
}

Backbone.Collection.prototype.oldParse = Backbone.Collection.prototype.parse
Backbone.Collection.prototype.parse = function() {
  var params = this.oldParse.apply(this, arguments);
  var collection = this;
  if (this.paramsNamespace) {
    var result = []
    $(params).each(function(){result.push(this[collection.paramsNamespace])})
    return result;
  } else
    return params;
}
