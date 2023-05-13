
function MeButton() {
  const me = document.getElementById('me');
    me.classList.toggle('clicked');
    if (me.classList.contains('clicked')) {
      // Run the function on first click
      // Replace this with your own function code
      console.log('Function ran on first click!');
      document.getElementById('box2-0ct').style.display = 'block'
    } else {
      // Return to normal on second click
      // Replace this with any code you need to reset the box
      console.log('Returned to normal on second click.');
      document.getElementById('box2-0ct').style.display = 'none'
    }
  }

  function ProjectButton() {
    const Project = document.getElementById('projects');
    Project.classList.toggle('clicked');
    if (projects.classList.contains('clicked')) {
      // Run the function on first click
      // Replace this with your own function code
      console.log('Function ran on first click!');
      document.getElementById('box2-0ct2').style.display = 'block'
    } else {
      // Return to normal on second click
      // Replace this with any code you need to reset the box
      console.log('Returned to normal on second click.');
      document.getElementById('box2-0ct2').style.display = 'none'
    }
  }

  function ContactButton() {
    const contact = document.getElementById('contact');
    contact.classList.toggle('clicked');
    if (contact.classList.contains('clicked')) {
      // Run the function on first click
      // Replace this with your own function code
      console.log('Function ran on first click!');
      document.getElementById('box2-0ct3').style.display = 'block'
    } else {
      // Return to normal on second click
      // Replace this with any code you need to reset the box
      console.log('Returned to normal on second click.');
      document.getElementById('box2-0ct3').style.display = 'none'
    }
  }

  
