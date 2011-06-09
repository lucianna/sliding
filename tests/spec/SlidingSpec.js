describe("Sliding", function() {

  it("should load the instance of the plugin", function() {
    expect($.ui.sliding).toBeTruthy();
  });

  var container = '#sliding-container';

  function createUnorderedList(itens) {
    var ul = $('<ul></ul>');
    var list = '';
    for(var i = 0; i < itens; i++) {
      list += '<li>item</li>';
    }
    $('<ul></ul>').appendTo(container);
    $(list).appendTo($(container).find('ul'));

  };

  beforeEach(function() {
     setFixtures(sandbox({
      'id': 'sliding-container',
      'class' : 'sliding'
     }));
     createUnorderedList(5);
  });

  describe("Sliding plugin horizontal mode", function() {
    beforeEach(function(){
      $('ul li',container).css('width', 100);
    });

    it("should set width based on itens", function(){
      $(container).sliding({
        itens: 3,
        mode: 'horizontal'
      });
      expect($(container).css('overflow')).toBe('hidden');
      expect($(container).css('width')).toBe('300px');
    });

    it("should show only the itens specified", function(){
      $(container).sliding({
        itens: 2
      });
      expect($(container).get(0)).toBeReallyVisible(2);
    });

    describe("navigation buttons", function(){
      it("should add next button in the target", function(){
        $(container).sliding({
            'target' : '#nav-x'
        });
      });
      it("shoud add prev button in the target", function(){

      });
      it("should add add button when next is passed", function(){
        $(container).sliding({
          'next' : '#nav-next-x'
        });
      })
    });


  });

});