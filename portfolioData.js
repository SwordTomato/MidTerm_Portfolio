function loadPortfolioData() {
    fetch('portfolioData.json')
        .then(response => response.json())
        .then(data => {
            document.title = data.title;

            const profilePic = document.getElementById('profile-pic');
            profilePic.src = data.profilePic.src;
            profilePic.alt = data.profilePic.alt;

            document.getElementById('username').textContent = data.info.name;

            const infoLabel = document.createElement('p');
            infoLabel.classList.add('label');
            infoLabel.textContent = data.info.label;
            document.querySelector('.info').appendChild(infoLabel);

            const infoName = document.createElement('p');
            infoName.id = 'info-name';
            infoName.textContent = data.info.name;
            document.querySelector('.info').appendChild(infoName);

            const hobbiesLabel = document.createElement('p');
            hobbiesLabel.classList.add('label');
            hobbiesLabel.textContent = data.hobbies.label;
            document.querySelector('.hobbies').appendChild(hobbiesLabel);

            const hobbiesList = document.createElement('ul');
            data.hobbies.list.forEach(hobby => {
                const li = document.createElement('li');
                li.textContent = hobby;
                hobbiesList.appendChild(li);
            });
            document.querySelector('.hobbies').appendChild(hobbiesList);

            const skillsLabel = document.createElement('p');
            skillsLabel.classList.add('label');
            skillsLabel.textContent = data.skills.label;
            document.querySelector('.skills').appendChild(skillsLabel);

            const skillsList = document.createElement('ul');
            data.skills.list.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });
            document.querySelector('.skills').appendChild(skillsList);

            const interestsLabel = document.createElement('p');
            interestsLabel.classList.add('label');
            interestsLabel.textContent = data.interests.label;
            document.querySelector('.interests').appendChild(interestsLabel);

            const interestsList = document.createElement('ul');
            data.interests.list.forEach(interest => {
                const li = document.createElement('li');
                li.textContent = interest;
                interestsList.appendChild(li);
            });
            document.querySelector('.interests').appendChild(interestsList);

            const contactLabel = document.createElement('p');
            contactLabel.classList.add('label');
            contactLabel.textContent = data.contact.label;

            const contactLink = document.getElementById('contact-link');
            contactLink.href = data.contact.link.url;
            contactLink.textContent = data.contact.link.text;

            const footer = document.querySelector('footer');
            footer.insertBefore(contactLabel, contactLink);

            const sidebar = document.querySelector('.sidebar');
            data.servers.forEach(server => {
                const serverIcon = document.createElement('div');
                serverIcon.classList.add('server-icon');
                serverIcon.style.backgroundImage = `url('${server.image}')`;
                serverIcon.title = server.title;

                serverIcon.onclick = openAddWorkPage;
                sidebar.appendChild(serverIcon);
            });
        })
        .catch(error => console.error('Error loading portfolio data:', error));
}

window.onload = loadPortfolioData;
