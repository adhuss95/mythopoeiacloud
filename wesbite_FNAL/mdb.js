
/* Opening a page when tab is clicked */
function drpdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function openPage(pagename, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("contenttab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pagename).style.display = "block";
    elmnt.style.backgroundColor = color;
}

function multipleFunc() {
    document.getElementById("list_all").multiple = true;
    $("list").attr("size", "3")
    //document.getElementById("list").reset();
}

// 
/* Get the element with id="defaultOpen" and click on it */

// document.getElementById("defaultOpen").click();


/* Function to add row for Movies Tab */



$(document).ready(function () {
    $(".add-row-movie").click(function () {
        var name = $("#name").val();
        var genre = $("#genre").val();
        var duration = $("#duration").val();
        var format = $("#format").val();
        var select = $("#list_all").val();
        var syneng = $("#sy_eng").val();
        var synfre = $("#sy_fre").val();
        var director = $("#director").val();
        var actor = $("#actor").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>"
            + name + "</td><td>"
            + genre + "</td><td>"
            + duration + "</td><td>"
            + format + "</td><td>"
            + select + "</td><td>"
            + syneng + "</td><td>"
            + synfre + "</td><td>"
            + director + "</td><td>"
            + actor + "</td></tr>";
        $("#table1 tbody").append(markup);
        document.getElementById("form1").reset();
        $("list").attr("size", "1")

    });


    // Find and remove selected table rows

    $(".delete-row-movie").click(function () {
        $("table tbody").find('input[name="record"]').each(function () {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
        });
    });
});

//     $(".save-row-movie").click(function(){
//         var table_data=[];

//         $("#table1 tr").each(function(kolby,tr){
//            var sub = {
//                 "name":$(tr).find("td:eq(1)").text(),
//                 "genre":$(tr).find("td:eq(2)").text(),
//                 "duration":$(tr).find("td:eq(3)").number(),

//                 "format":$(tr).find("td:eq(4)").text(),
//                 "select":$(tr).find("td:eq(5)").text(),
//                 "syneng":$(tr).find("td:eq(6)").text(),

//                 "synfre":$(tr).find("td:eq(7)").text(),
//                 "director":$(tr).find("td:eq(8)").text(),
//                 "actor":$(tr).find("td:eq(9)").text(),

//            };

//            table_data.push(sub);   
//         });
//     });
//         console.log(table_data);

//     // $('#addcol').click(function () {
//     //     var $tablerow = $('table.table1').find('tr');
//     //     count = 0;

//     //     $tablerow.each(function (index, value) {
//     //         count += 1;
//     //         //alert('Working on row: ' + count);
//     //         var $listitem = $(this);
//     //         //alert('ListItem: ' + $listitem.index());
//     //         n = parseInt($listitem.index());
//     //         //alert('Value of n: ' + n);
//     //         var $newRow = $("<td>" + n + "</td>");
//     //         $("table.table-editor tr:eq(" + n + ")").append($newRow);
//     //     });
//     // });

// //Autocmplete function when typed movie name 

// });

// $(function(){
//     $("#genre").focus(); //Focus on search field
//     $("#genre").autocomplete({
//         minLength: 0,
//         delay:5,
//         source: "suggest.php",
//         focus: function( event, ui ) {
//             $(this).val( ui.item.value );
//             return false;
//         },
//         select: function( event, ui ) {
//             $(this).val( ui.item.value );
//             return false;
//         }
//     }).data("uiAutocomplete")._renderItem = function( ul, item ) {
//         return $("<li></li>")
//             .data( "item.autocomplete", item )
//             .append( "<a>" + (item.img?"<img class='imdbImage' src='image.php?url=" + item.img + "' />":"") + "<span class='imdbTitle'>" + item.label + "</span>" + (item.cast?"<br /><span class='imdbCast'>" + item.cast + "</span>":"") + "<div class='clear'></div></a>" )
//             .appendTo( ul );
//     };
// });



function addColumn() {

    var tblHeadObj = document.getElementById('table1').tHead; //table head

    for (var h = 0; h < tblHeadObj.rows.length; h++) {

        var newTH = document.createElement('th');



        tblHeadObj.rows[h].appendChild(newTH); //append ne th to table

        newTH.innerHTML = 'Enter heading'; //append th content to th
        document.getElementById(newTH).contentEditable = "true";

    }



    var tblBodyObj = document.getElementById('table1').tBodies[0]; //table body

    for (var i = 0; i < tblBodyObj.rows.length; i++) {

        var newCell = tblBodyObj.rows[i].insertCell(-1); //create new cell

        var txtBox = document.createElement("input");
        txtBox.type = "text";
        txtBox.name = "Text1";
        txtBox.id = "myTxt";
        newCell.appendChild(txtBox);
        newCell.innerHTML = ''; //append data to cell
        // document.getElementById(newCell).contentEditable="true";

    }

}

function deleteColumn() {

    var allRows = document.getElementById('table1').rows;

    for (var i = 0; i < allRows.length; i++) {

        if (allRows[i].cells.length > 3) {

            allRows[i].deleteCell(-1); //delete the cell

        } else {

            alert("You can't delete more columns.");

            return;

        }

    }

}




// $(document).ready(function () {
//     $(".addRow").click(function () {
//         var markup = "<tr><td><input type='checkbox' name='record'></td><td></tr>"
//         // var name = $("#name").val();
//         // var genre = $("#genre").val();
//         // var duration = $("#duration").val();
//         // var format = $("#format").val();
//         // var syneng = $("#sy_eng").val();
//         // var synfre = $("#sy_fre").val();
//         // var director = $("#director").val();
//         // var actor = $("#actor").val();
//         // var markup = "<tr><td><input type='checkbox' name='record'></td><td>"
//         //     + name + "</td><td>"
//         //     + genre + "</td><td>"
//         //     + duration + "</td><td>"
//         //     + format + "</td><td>"
//         //     + syneng + "</td><td>"
//         //     + synfre + "</td><td>"
//         //     + director + "</td><td>"
//         //     + actor + "</td></tr>";
//         $("#table1 tbody").append(markup);
//     });
// });

// var objTable= document.getElementById(id);

// /* Add row using insertrow function by checking the length of the table */

// var objRow= objTable.insertRow(objTable.rows.length);

/* Inserting the row */

// var objCell1= objRow.insertCell(0); 
// var objCell2= objRow.insertCell(1); 
// var objCell3= objRow.insertCell(2); 
// var objCell4= objRow.insertCell(3); 
// var objCell5= objRow.insertCell(4); 
// var objCell6= objRow.insertCell(5); 
// var objCell7= objRow.insertCell(6); 

// var objInputCheckBox = document.createElement("input");
// objInputCheckBox.type = "checkbox";
// objCell1.appendChild(objInputCheckBox);

// var x = document.createElement("TEXTAREA");
// x.contentEditable = 'true';
// x.type = "textarea";
// x.style.display = "'width=100%' 'height=100%'";
// objCell2.appendChild(x);

// objCell2.innerHTML = "<input type = 'textarea' name='genre' width='100%'/>";
// objCell2.className = "formlabel";

/*function clearDefault(a){
    if(a.defaultValue==a.value){
        a.value=""
    }
}*/

//Creating the cell as an input text box//
//   var objinpc1 = document.createElement("input");
//   objinpc1.type = "text";
//   objCell1.appendChild(objinpc1);

//   var objinpc2 = document.createElement("input");
//   objinpc2.type = "text";
//   objCell2.appendChild(objinpc2);

//   var objinpc3 = document.createElement("input");
//   objinpc3.type = "number";
//   objCell3.appendChild(objinpc3);

//   var objinpc4 = document.createElement("input");
//   objinpc4.type = "text";
//   objCell4.appendChild(objinpc4);

//   var objinpc5 = document.createElement("input");
//   objinpc5.type = "text";
//   objCell5.appendChild(objinpc5);

//   var objinpc6 = document.createElement("input");
//   objinpc6.type = "text";
//   objCell6.appendChild(objinpc6);

//  var objinpc7= document.createElement("input");
//   objinpc7.type = "text";
//   objCell7.appendChild(objinpc7);



// function addrow_music(id) {
//     var objTable = document.getElementById(id);

//     /* Add row using insertrow function by checking the length of the table */

//     var objRow = objTable.insertRow(objTable.rows.length);

//     /* Inserting the row */

//     var objCell1 = objRow.insertCell(0);

//     var objCell2 = objRow.insertCell(1);
//     var objCell3 = objRow.insertCell(2);
//     var objCell4 = objRow.insertCell(3);
//     var objCell5 = objRow.insertCell(4);
//     var objCell6 = objRow.insertCell(5);



//     /*function clearDefault(a){
//         if(a.defaultValue==a.value){
//             a.value=""
//         }
//     }*/

//     //Creating the cell as an input text box//
//     //    objCell1.innerHTML = "Hi"

//     /*var objinpc2 = document.createElement("P");
//     objinpc2.type = "text";
//     objCell2.appendChild(objinpc2);

//     var objinpc3 = document.createElement("P");
//     objinpc3.type = "number";
//     objCell3.appendChild(objinpc3);

//     var objinpc4 = document.createElement("P");
//     objinpc4.type = "text";
//     objCell4.appendChild(objinpc4);

//     var objinpc5 = document.createElement("P");
//     objinpc5.type = "text";
//     objCell5.appendChild(objinpc5);

//     var objinpc6 = document.createElement("P");
//     objinpc6.type = "text";
//     objCell6.appendChild(objinpc6);
//    */

// }


// function addrow_app(id) {
//     var objTable = document.getElementById(id);

//     /* Add row using insertrow function by checking the length of the table */

//     var objRow = objTable.insertRow(objTable.rows.length);

//     /* Inserting the row */

//     var objCell1 = objRow.insertCell(0);
//     var objCell2 = objRow.insertCell(1);
//     var objCell3 = objRow.insertCell(2);
//     var objCell4 = objRow.insertCell(3);


//     function clearDefault(a){
//         if(a.defaultValue==a.value){
//             a.value=""
//         }
//     }

//     //      //Creating the cell as an input text box//
//     //   var objinpc1 = document.createElement("input");
//     //   objinpc1.type = "text";
//     //   objCell1.appendChild(objinpc1);

//     //   var objinpc2 = document.createElement("input");
//     //   objinpc2.type = "text";
//     //   objCell2.appendChild(objinpc2);

//     //   var objinpc3 = document.createElement("input");
//     //   objinpc3.type = "number";
//     //   objCell3.appendChild(objinpc3);

//     //   var objinpc4 = document.createElement("input");
//     //   objinpc4.type = "text";
//     //   objCell4.appendChild(objinpc4);


// }


// function addrow_mag(id) {
//     var objTable = document.getElementById(id);

//     /* Add row using insertrow function by checking the length of the table */

//     var objRow = objTable.insertRow(objTable.rows.length);

//     /* Inserting the row */

//     var objCell1 = objRow.insertCell(0);
//     var objCell2 = objRow.insertCell(1);
//     var objCell3 = objRow.insertCell(2);
//     var objCell4 = objRow.insertCell(3);


//     /*function clearDefault(a){
//         if(a.defaultValue==a.value){
//             a.value=""
//         }
//     }*/

//     //      //Creating the cell as an input text box//
//     //   var objinpc1 = document.createElement("input");
//     //   objinpc1.type = "text";
//     //   objCell1.appendChild(objinpc1);

//     //   var objinpc2 = document.createElement("input");
//     //   objinpc2.type = "text";
//     //   objCell2.appendChild(objinpc2);

//     //   var objinpc3 = document.createElement("input");
//     //   objinpc3.type = "number";
//     //   objCell3.appendChild(objinpc3);

//     //   var objinpc4 = document.createElement("input");
//     //   objinpc4.type = "text";
//     //   objCell4.appendChild(objinpc4);


// }


