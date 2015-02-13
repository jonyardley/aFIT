System.register(["aurelia-framework", "./image"], function (_export) {
  "use strict";

  var LogManager, Image, _prototypeProperties, _classCallCheck, log, Images;
  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_image) {
      Image = _image.Image;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      log = LogManager.getLogger("av::images");
      Images = _export("Images", (function () {
        function Images() {
          _classCallCheck(this, Images);

          this.collection = [];
          this.active = null;
        }

        _prototypeProperties(Images, null, {
          newImage: {
            value: function newImage(opts) {
              var id = this.collection.length + 1,
                  newImage = new Image(id, opts);

              this.collection.push(newImage);
              this.active = newImage;
              log.info("created new image", this);
            },
            writable: true,
            configurable: true
          }
        });

        return Images;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2ltYWdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxVQUFVLEVBR1YsS0FBSyx5Q0FGVCxHQUFHLEVBSU0sTUFBTTs7O0FBTFgsZ0JBQVUscUJBQVYsVUFBVTs7QUFHVixXQUFLLFVBQUwsS0FBSzs7Ozs7OztBQUZULFNBQUcsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztBQUkvQixZQUFNO0FBRVAsaUJBRkMsTUFBTTtnQ0FBTixNQUFNOztBQUdqQixjQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNyQixjQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNuQjs7NkJBTFcsTUFBTTtBQVdsQixrQkFBUTttQkFBQyxrQkFBQyxJQUFJLEVBQUU7QUFDZixrQkFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztrQkFDbEMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFaEMsa0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLGtCQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUN2QixpQkFBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNwQzs7Ozs7O2VBbEJXLE1BQU0iLCJmaWxlIjoidXRpbHMvaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=