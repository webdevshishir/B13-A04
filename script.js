let interviewList = [];
let rejectedList = [];



// COunt


let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const allCardSection = document.getElementById('allCards');

const mainContainer = document.querySelector('main')

// console.log(mainContainer);
// console.log(allCardSection.children.length);

function calculateCount(){
    totalCount.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length

}
calculateCount()
  
// Toggle Style

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-400','text-black')
   interviewFilterBtn.classList.remove('bg-blue-400','text-black')
    rejectedFilterBtn.classList.remove('bg-blue-400','text-black')

     allFilterBtn.classList.add('bg-white','text-black')
   interviewFilterBtn.classList.add('bg-white','text-black')
    rejectedFilterBtn.classList.add('bg-white','text-black')

    const selected = document.getElementById(id)
    // console.log(selected);

    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-400', 'text-black')

}

// CHecking part 

// mainContainer.addEventListener('click', function(event) {
//     // console.log(event.target.parentNode.parentNode);
//     const parentNode = event.target.parentNode.parentNode;
//     const companyName = parentNode.querySelector('.companyName').innerText
//     const positionName = parentNode.querySelector('.positionName').innerText
//     const location = parentNode.querySelector('.location').innerText
//     const type = parentNode.querySelector('.type').innerText
//     const salary = parentNode.querySelector('.salary').innerText
//     const description = parentNode.querySelector('.description').innerText
//     const statusNow = parentNode.querySelector('.statusNow').innerText
//     // console.log(companyName,positionName,location,type,salary,description,statusNow);

//     const cardInfo = {
//         companyName,
//         positionName,
//         location,
//         type,
//         salary,
//         description,
//         statusNow,
    
        
        
//     }
// console.log(cardInfo);
// })


// My New Event deligation system  ---------------
mainContainer.addEventListener('click', function(event){

    const card = event.target.closest('.space-y-9');
    if(!card) return;

    const companyName = card.querySelector('.companyName').innerText;
    const statusTag = card.querySelector('.Status');

    // interview button
    if(event.target.classList.contains('interview-btn')){

        if(interviewList.includes(companyName)){
            
            interviewList = interviewList.filter(name => name !== companyName);
            statusTag.innerText = "Not Applied";
            statusTag.className = "description Status bg-gray-300 inline-block rounded p-2";
        }else{

            interviewList.push(companyName);

           
            rejectedList = rejectedList.filter(name => name !== companyName);

            statusTag.innerText = "Interview";
            statusTag.className = "description Status bg-green-200 inline-block rounded p-2";
        }

        calculateCount();
    }



//    rejected buttonb

    if(event.target.classList.contains('rejected-btn')){

        if(rejectedList.includes(companyName)){
            rejectedList = rejectedList.filter(name => name !== companyName);
            statusTag.innerText = "Not Applied";
            statusTag.className = "description Status bg-gray-300 inline-block rounded p-2";
        }else{

            rejectedList.push(companyName);

            interviewList = interviewList.filter(name => name !== companyName);

            statusTag.innerText = "Rejected";
            statusTag.className = "description Status bg-red-200 inline-block rounded p-2";
        }

        calculateCount();
    }

    // delete button

    if(event.target.closest('.delete-btn')){

        interviewList = interviewList.filter(name => name !== companyName);
        rejectedList = rejectedList.filter(name => name !== companyName);

        card.remove();
        calculateCount();
    }

});



// Button  Section done

// filter sytem ongoing

allFilterBtn.addEventListener('click', function(){

    const cards = allCardSection.children;

    for(let card of cards){
        card.style.display = "flex";
    }

});


interviewFilterBtn.addEventListener('click', function(){

    const cards = allCardSection.children;

    for(let card of cards){

        const companyName = card.querySelector('.companyName').innerText;

        if(interviewList.includes(companyName)){
            card.style.display = "flex";
        }else{
            card.style.display = "none";
        }
    }

});


// rejected btn


rejectedFilterBtn.addEventListener('click', function(){

    const cards = allCardSection.children;

    for(let card of cards){

        const companyName = card.querySelector('.companyName').innerText;

        if(rejectedList.includes(companyName)){
            card.style.display = "flex";
        }else{
            card.style.display = "none";
        }
    }

});

