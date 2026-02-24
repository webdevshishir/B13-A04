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
console.log(mainContainer);

console.log(allCardSection.children.length);

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

mainContainer.addEventListener('click', function(event) {
    // console.log(event.target.parentNode.parentNode);
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText
    const positionName = parentNode.querySelector('.positionName').innerText
    const location = parentNode.querySelector('.location').innerText
    const type = parentNode.querySelector('.type').innerText
    const salary = parentNode.querySelector('.salary').innerText
    const description = parentNode.querySelector('.description').innerText
    const statusNow = parentNode.querySelector('.statusNow').innerText
    // console.log(companyName,positionName,location,type,salary,description,statusNow);

    const cardInfo = {
        companyName,
        positionName,
        location,
        type,
        salary,
        description,
        statusNow,
    
        
        
    }
console.log(cardInfo);
})