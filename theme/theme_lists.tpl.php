 
<div id="display_noderef_dragdrop">
  <div id="list_containing_nodes" class="<?php print $content['content']['css_selector_draggable'] ?>">
    <h2><?php print $content['content']['node_type_containing'] ?></h2>
    <ul class="containing_nodes">
      <?php foreach ($content['content']['node_containing'] as $node_containing): ?>
        <li nid="<?php print  $node_containing['nid'] ?>"><?php print $node_containing['title'] ?></li>
      <?php endforeach; ?>
    </ul>
  </div>
  <div id="list_container_node" class="<?php print $content['content']['css_selector_droppable'] ?>">
    <h2>
      <?php print $content['content']['node_type_container'] ?> :
      <select id="node_type_container_nodes">
        <?php foreach ($content['content']['node_type_container_nodes'] as $node_type_container_nodes): ?>
          <option nid="<?php print  $node_type_container_nodes['nid'] ?>"><?php print $node_type_container_nodes['title'] ?></option>
        <?php endforeach; ?>
      </select>

    </h2>
    <?php //dsm($content['content']['node_type_container_nodes']) ?>
    <ul class="container_node">
      
    </ul>
  </div>
    
</div>
