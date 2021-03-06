const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="shared-styles"> 
  <template> 
   <style>
            :host(.borders) .cell {
                border-left-style: solid;
                border-bottom-style: solid;
                border-color: lightgray;
                border-left-width: 1px;
                border-bottom-width: 1px;
            }
        </style> 
  </template> 
 </dom-module>`;

document.head.appendChild($_documentContainer.content);

