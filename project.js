function loadWorkData() {
    fetch('workData.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const workList = document.getElementById('workList');
            workList.innerHTML = '';

            data.workData.forEach(work => {
                const workItem = document.createElement('div');
                workItem.classList.add('work-item');

                // Create image element only if image URL exists
                let imageHtml = '';
                if (work.image) {
                    imageHtml = `<img src="${work.image}" alt="${work.name} image" class="work-image">`;
                }

                workItem.innerHTML = `
                    ${imageHtml} 
                    <span class="work-name"><strong>${work.name}</strong></span>
                    <span><a href="${work.link}" target="_blank">${work.link}</a></span>
                `;
                workList.appendChild(workItem);
            });
        })
        .catch(error => console.error('Error loading work data:', error));
}

document.getElementById('returnMenuBtn').onclick = function() {
    window.location.href = 'index.html';
};

window.onload = loadWorkData;
