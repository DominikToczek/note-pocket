class Note
{
    constructor (title, content, color, date, ID)
    {
        this.title = title;
        this.content = content;
        this.color = color;
        this.ID = ID;
        this.date = date;
    }
}


let storageArray = [];
const title = document.querySelector('#noteTitle');
const content = document.querySelector('#noteContent');
const color = document.querySelector('#noteColor');
let pinCounter = 1;


window.onload = function(){
    let notesArray = JSON.parse(localStorage.getItem('notes'));
    if( notesArray != null)
    {
        storageArray = notesArray;
    }
    else
    {
        storageArray = [];
    }
    LoadNotes();
}

function ClearNewNote()
{
    title.value = "";
    content.value = "";
    color.value = "#868629";
}

function LoadNotes()
{
    for(let i=0; i<storageArray.length; i++)
    {
        let noteTitle = "#noteTitle" + storageArray[i].ID;
        let noteContent = "#noteContent" + storageArray[i].ID;
        let noteColor = "#note" + storageArray[i].ID;
        let noteDate = "#noteDate" + storageArray[i].ID;
        let date = storageArray[i].date;
        document.querySelector(noteTitle).innerHTML = storageArray[i].title;
        document.querySelector(noteContent).innerHTML = storageArray[i].content;
        document.querySelector(noteColor).style.background = storageArray[i].color;
        document.querySelector(noteDate).innerHTML = date;
    }
}

function AddNewNote(noteID)
{
    let date = new Date();
    let date2 = date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
    let noteTitle = "#noteTitle" + noteID;
    let noteContent = "#noteContent" + noteID;
    let noteColor = "#note" + noteID;
    let noteDate = "#noteDate" + noteID;
    let note = new Note(title.value, content.value, color.value, date2, noteID);
    storageArray.push(note);
    localStorage.setItem('notes', JSON.stringify(storageArray));
    ClearNewNote();
    document.querySelector(noteTitle).innerHTML = note.title;
    document.querySelector(noteContent).innerHTML = note.content;
    document.querySelector(noteColor).style.background = note.color;
    document.querySelector(noteDate).innerHTML = date2;
}

function DeleteNote(noteID)
{
    let noteTitle = "#noteTitle" + noteID;
    let noteContent = "#noteContent" + noteID;
    let noteColor = "#note" + noteID;
    let noteDate = "#noteDate" + noteID;
    document.querySelector(noteTitle).innerHTML = "";
    document.querySelector(noteContent).innerHTML = "";
    document.querySelector(noteColor).style.background = "#C0C0C1";
    document.querySelector(noteDate).innerHTML = "";
    storageArray.splice(getNoteIndex(noteID),1);
    localStorage.setItem('notes', JSON.stringify(storageArray));
}

function Pin(noteID)
{
    let notepin = "notepin" + pinCounter;
    let noteTitle = "#noteTitle" + noteID;
    let noteContent = "#noteContent" + noteID;
    let noteColor = "#note" + noteID;
    let noteDate = "#noteDate" + noteID;
    let noteTitle2 = "#noteTitlePin" + pinCounter;
    let noteContent2 = "#noteContentPin" + pinCounter;
    let noteColor2 = "#notepin" + pinCounter;
    let noteDate2 = "#noteDatePin" + pinCounter;
    if (pinCounter < 5)
    {
        let title = document.querySelector(noteTitle).innerHTML;
        let content = document.querySelector(noteContent).innerHTML;
        let color = document.querySelector(noteColor).style.background;
        let date = document.querySelector(noteDate).innerHTML;
        document.querySelector(noteTitle2).innerHTML = title;
        document.querySelector(noteContent2).innerHTML = content;
        document.querySelector(noteColor2).style.background = color;
        document.querySelector(noteDate2).innerHTML = date;
        switch(pinCounter)
        {
            case 1:
                document.getElementById(notepin).style.display = "flex";
                break;
            case 2:
                document.getElementById(notepin).style.display = "flex";
                break;
            case 3:
                document.getElementById(notepin).style.display = "flex";
                break;
            case 4:
                document.getElementById(notepin).style.display = "flex";
                break;
        }
        pinCounter++;
    }
}

function Unpin(notePinID)
{
    let Title1 = document.querySelector("#noteTitlePin" + notePinID);
    let Content1 = document.querySelector("#noteContentPin" + notePinID);
    let Date1 = document.querySelector("#noteDatePin" + notePinID);
    let Color1 = document.querySelector("#notepin" + notePinID);

    Title1.innerHTML = "";
    Content1.innerHTML = "";
    Date1.innerHTML = "";
    Color1.style.background = "#868629";
    document.getElementById("notepin" + notePinID).style.display = "none";
    pinCounter--;
}

function getNoteIndex(ID)
{
    let index;
    for (let i=0; i<storageArray.length-1; i++)
    {
        if (storageArray[i].ID == ID)
        {
            index = i;
        }
    }
    return index;
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

document.querySelector("#pin1").addEventListener("click", function(){
    Pin(1)
})
document.querySelector("#pin2").addEventListener("click", function(){
    Pin(2)
})
document.querySelector("#pin3").addEventListener("click", function(){
    Pin(3)
})
document.querySelector("#pin4").addEventListener("click", function(){
    Pin(4)
})
document.querySelector("#pin5").addEventListener("click", function(){
    Pin(5)
})
document.querySelector("#pin6").addEventListener("click", function(){
    Pin(6)
})
document.querySelector("#pin7").addEventListener("click", function(){
    Pin(7)
})
document.querySelector("#pin8").addEventListener("click", function(){
    Pin(8)
})
document.querySelector("#pin9").addEventListener("click", function(){
    Pin(9)
})
document.querySelector("#pin10").addEventListener("click", function(){
    Pin(10)
})
document.querySelector("#pin11").addEventListener("click", function(){
    Pin(11)
})
document.querySelector("#pin12").addEventListener("click", function(){
    Pin(12)
})

document.querySelector("#unpin1").addEventListener("click", function(){
    Unpin(1)
})
document.querySelector("#unpin2").addEventListener("click", function(){
    Unpin(2)
})
document.querySelector("#unpin3").addEventListener("click", function(){
    Unpin(3)
})
document.querySelector("#unpin4").addEventListener("click", function(){
    Unpin(4)
})