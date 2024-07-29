const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt event triggered');
    event.preventDefault();

    deferredPrompt = event;

    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('button is clicked');
  if(deferredPrompt){
    deferredPrompt.prompt();

    const {outcome} = await deferredPrompt.userChoice;

    console.log(`User response to the install prompt: ${outcome}`);

    deferredPrompt = null;

    butInstall.style.display = 'none';
  } else{
    console.log(`${deferredPrompt}`);
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed');
    butInstall.style.display = 'none';
});

