$(document).ready(function(){
  $( "li", '.containing_nodes' ).draggable({revert: "invalid"});

  $('.container_node').droppable({
    accept: ".containing_nodes > li",
    activeClass: "ui-state-highlight",
    drop: function( event, ui ) {
      toContainer(ui.draggable);
    }
  });
  $('#node_type_container_nodes').change(function(){
    container = $('#node_type_container_nodes').find(':selected');
    $.ajax({
      type: "POST",
      url: Drupal.settings.basePath + "noderef_dragdrop/ajax",
      data: {action : "get_containing_nodes", nid_container: container.attr('nid'), node_type_containing: Drupal.settings.node_type_containing, field_machine: Drupal.settings.field_machine_name},
      dataType : 'json',
      success : function( data ) {
        $('.containing_nodes li, .container_node li').remove();

        jQuery.each(data.left_list, function(i, val) {
          $('.containing_nodes').append('<li nid="' + val.nid + '">' + val.title + '</li>');
        });
        
        jQuery.each(data.right_list, function(i, val) {
          $('.container_node').append('<li nid="' + val.nid + '">' + val.title + '</li>');
        });
        
        $( "li", '.containing_nodes' ).draggable({revert: "invalid"});
      }
    });
  });
  function toContainer(item){

    item.css({"position": "initial"});
    $('.container_node').append(item);
    
    container = $('#node_type_container_nodes').find(':selected');
    $.ajax({
      type: "POST",
      url: Drupal.settings.basePath + "noderef_dragdrop/ajax",
      data: {action : "containing_to_containner", nid_container: container.attr('nid'), nid_containing: $(item).attr('nid'), field_machine: Drupal.settings.field_machine_name},
      success : function( msg ) {}
    })
    //$item.remove();
  }

});