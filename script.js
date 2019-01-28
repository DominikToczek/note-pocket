class Note
{
    constructor (title, content, color, ID)
    {
        this.title = title;
        this.content = content;
        this.color = color;
        this.ID = ID;
    }
}


let storageArray = [];
const title = document.querySelector('#noteTitle');
const content = document.querySelector('#noteContent');
const color = document.querySelector('#noteColor');


window.onload = function(){
    storageArray = JSON.parse(localStorage.getItem('notes'));
}

function ClearNewNote()
{
    title.value = "";
    content.value = "";
    color.value = "#868629";
}

function AddNewNote(noteID)
{
    let noteTitle = "#noteTitle" + noteID;
    let noteContent = "#noteContent" + noteID;
    let noteColor = "#note" + noteID;
    let note = new Note(title.value, content.value, color.value, noteID);
    storageArray.push(note);
    localStorage.setItem('notes', JSON.stringify(storageArray))
    ClearNewNote();
    document.querySelector(noteTitle).innerHTML = note.title;
    document.querySelector(noteContent).innerHTML = note.content;
    document.querySelector(noteColor).style.background = note.color;
}

function DeleteNote(noteID)
{
    let noteTitle = "#noteTitle" + noteID;
    let noteContent = "#noteContent" + noteID;
    let noteColor = "#note" + noteID;
    document.querySelector(noteTitle).innerHTML = "";
    document.querySelector(noteContent).innerHTML = "";
    document.querySelector(noteColor).style.background = "#868629";
}




document.querySelector('#add1').addEventListener("click", function(){
    AddNewNote(1);
});
document.querySelector('#add2').addEventListener("click", function(){
    AddNewNote(2);
});
document.querySelector('#add3').addEventListener("click", function(){
    AddNewNote(3);
});
document.querySelector('#add4').addEventListener("click", function(){
    AddNewNote(4);
});
document.querySelector('#add5').addEventListener("click", function(){
    AddNewNote(5);
});
document.querySelector('#add6').addEventListener("click", function(){
    AddNewNote(6);
});
document.querySelector('#add7').addEventListener("click", function(){
    AddNewNote(7);
});
document.querySelector('#add8').addEventListener("click", function(){
    AddNewNote(8);
});
document.querySelector('#add9').addEventListener("click", function(){
    AddNewNote(9);
});
document.querySelector('#add10').addEventListener("click", function(){
    AddNewNote(10);
});
document.querySelector('#add11').addEventListener("click", function(){
    AddNewNote(11);
});
document.querySelector('#add12').addEventListener("click", function(){
    AddNewNote(12);
});

document.querySelector("#delete1").addEventListener("click", function(){
    DeleteNote(1);
})
document.querySelector("#delete2").addEventListener("click", function(){
    DeleteNote(2);
})
document.querySelector("#delete3").addEventListener("click", function(){
    DeleteNote(3);
})
document.querySelector("#delete4").addEventListener("click", function(){
    DeleteNote(4);
})
document.querySelector("#delete5").addEventListener("click", function(){
    DeleteNote(5);
})
document.querySelector("#delete6").addEventListener("click", function(){
    DeleteNote(6);
})
document.querySelector("#delete7").addEventListener("click", function(){
    DeleteNote(7);
})
document.querySelector("#delete8").addEventListener("click", function(){
    DeleteNote(8);
})
document.querySelector("#delete9").addEventListener("click", function(){
    DeleteNote(9);
})
document.querySelector("#delete10").addEventListener("click", function(){
    DeleteNote(10);
})
document.querySelector("#delete11").addEventListener("click", function(){
    DeleteNote(11);
})
document.querySelector("#delete12").addEventListener("click", function(){
    DeleteNote(12);
})
