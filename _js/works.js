$(function () {

    var lastElementClicked;
    var oldTop;
    var oldLeft;
    var oldWidth;
    var oldHeight;
    
    Barba.Pjax.init();
    Barba.Prefetch.init();

    Barba.Dispatcher.on('linkClicked', function (el) {
        lastElementClicked = el;
    });

    var ExpandTransition = Barba.BaseTransition.extend({
        start: function () {
            this.originalThumb = lastElementClicked.parentNode;

            Promise
                .all([this.newContainerLoading, this.enlargeThumb()])
                .then(this.showNewPage.bind(this));
        },

        enlargeThumb: function () {
            var deferred = Barba.Utils.deferred();
            var thumbPosition = this.originalThumb.getBoundingClientRect();

            this.cloneThumb = this.originalThumb.cloneNode(true);
            this.cloneThumb.style.position = 'absolute';
            oldTop = this.cloneThumb.style.top = thumbPosition.top + 'px';
            oldLeft = this.cloneThumb.style.left = thumbPosition.left + 'px';
            oldWidth = this.cloneThumb.style.width = thumbPosition.width + 'px';
            oldHeight = this.cloneThumb.style.height = thumbPosition.height + 'px';

            this.oldContainer.appendChild(this.cloneThumb);

            TweenLite.to(this.cloneThumb, 0.5, {
                top: "10vh",
                left: 0,
                height: "100vh",
                width: "41.14vw",
                onComplete: function () {
                    deferred.resolve();
                }
            }, "easeInOutExpo");
            

            return deferred.promise;
        },

        showNewPage: function () {
            this.newContainer.style.visibility = 'visible';
            this.done();
        },
    });


    var ShrinkTransition = Barba.BaseTransition.extend({
        start: function () {
            this.newContainerLoading.then(this.shrinkImage.bind(this));
        },

        shrinkImage: function () {
            var _this = this;

            this.oldContainer.style.zIndex = '10';
            this.newContainer.style.visibility = 'visible';

            var href = Barba.HistoryManager.prevStatus().url.split('/').pop();
            var destThumb = this.newContainer.querySelector('a[href="' + href + '"]');
            var destThumbPosition = destThumb.getBoundingClientRect();
            var fullImage = this.oldContainer.querySelector('.full');

            TweenLite.to(fullImage, 0.5, {
                top: oldTop,
                left : oldLeft,
                height: oldHeight,
                width : oldWidth,
                onComplete: function () {
                    _this.done();
                }
            });
        }
    });

    Barba.Pjax.getTransition = function () {
        var transitionObj = ExpandTransition;

        if (Barba.HistoryManager.prevStatus().namespace === 'detail') {
            transitionObj = ShrinkTransition;
        }

        return transitionObj;
    };

});


/*document.addEventListener("DOMContentLoaded", function() {
  var lastElementClicked;
  Barba.Pjax.init();
  Barba.Prefetch.init();

  Barba.Dispatcher.on('linkClicked', function(el) {
    lastElementClicked = el;
  });

  var ExpandTransition = Barba.BaseTransition.extend({
    start: function() {
      this.originalThumb = lastElementClicked;

      Promise
        .all([this.newContainerLoading, this.enlargeThumb()])
        .then(this.showNewPage.bind(this));
    },

    enlargeThumb: function() {
      var deferred = Barba.Utils.deferred();
      var thumbPosition = this.originalThumb.getBoundingClientRect();

      this.cloneThumb = this.originalThumb.cloneNode(true);
      this.cloneThumb.style.position = 'absolute';
      this.cloneThumb.style.top = thumbPosition.top + 'px';

      this.oldContainer.appendChild(this.cloneThumb);

      TweenLite.to(this.cloneThumb, 0.3, {
        top: 0,
        height: window.innerHeight,
        onComplete: function() {
          deferred.resolve();
        }
      });

      return deferred.promise;
    },

    showNewPage: function() {
      this.newContainer.style.visibility = 'visible';
      this.done();
    }
  });


  var ShrinkTransition = Barba.BaseTransition.extend({
    start: function() {
      this.newContainerLoading.then(this.shrinkImage.bind(this));
    },

    shrinkImage: function() {
      var _this = this;

      this.oldContainer.style.zIndex = '10';
      this.newContainer.style.visibility = 'visible';

      var href = Barba.HistoryManager.prevStatus().url.split('/').pop();
      var destThumb = this.newContainer.querySelector('a[href="' + href + '"]');
      var destThumbPosition = destThumb.getBoundingClientRect();
      var fullImage = this.oldContainer.querySelector('.full');

      TweenLite.to(this.oldContainer.querySelector('.back'), 0.2, { opacity: 0 });

      TweenLite.to(fullImage, 0.3, {
        top: destThumbPosition.top,
        height: destThumb.clientHeight,
        onComplete: function() {
          _this.done();
        }
      });
    }
  });

  Barba.Pjax.getTransition = function() {
    var transitionObj = ExpandTransition;

    if (Barba.HistoryManager.prevStatus().namespace === 'detail') {
      transitionObj = ShrinkTransition;
    }

    return transitionObj;
  };

});*/
