async function openPopup(userName) {
    try {
        document.getElementById('pop').style.display = 'block';

        const response = await fetch(`https://gorest.co.in/public/v2/users?name=${encodeURIComponent(userName)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();

        if (data && data.data && data.data.length > 0) {
            const user = data.data[0]; 

            const modalContent = document.getElementById('modalContent');
            modalContent.innerHTML = ''; 

            const userHTML = `
                <div>
                    <p>ID: ${user.id}</p>
                    <p>Name: ${user.name}</p>
                    <p>Email: ${user.email}</p>
                    <p>Gender: ${user.gender}</p>
                    <p>Status: ${user.status}</p>
                </div>
            `;

            modalContent.innerHTML = userHTML;
        } else {
            console.error('User not found or invalid data format:', data);
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function closePopup() {
    document.getElementById('pop').style.display = 'none';
}
