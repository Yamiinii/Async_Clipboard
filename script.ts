document.getElementById('copyTextButton')!.addEventListener('click', async () => {
    try {
        const text = 'Hello, pickled world!';
        const textBlob = new Blob([text], { type: 'text/plain' });
        const clipboardItem = new ClipboardItem({ 'text/plain': textBlob });
        await navigator.clipboard.write([clipboardItem]);
        alert('Text copied to clipboard');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});

document.getElementById('copyImageButton')!.addEventListener('click', async () => {
    try {
        const image = "image to be converted into gvml"; // Placeholder for actual image data
        const imageBlob = new Blob([image], { type: 'image/png' });
        const clipboardItem = new ClipboardItem({ 'image/png': imageBlob });
        await navigator.clipboard.write([clipboardItem]);
        alert('Image copied to clipboard');
    } catch (err) {
        console.error('Failed to copy image: ', err);
    }
});

document.getElementById('copyAudioButton')!.addEventListener('click', async () => {
    try {
        const audio = "audio to be converted into gvml"; // Placeholder for actual audio data
        const audioBlob = new Blob([audio], { type: 'audio/mpeg' });
        const clipboardItem = new ClipboardItem({ 'audio/mpeg': audioBlob });
        await navigator.clipboard.write([clipboardItem]);
        alert('Audio copied to clipboard');
    } catch (err) {
        console.error('Failed to copy audio: ', err);
    }
});

document.getElementById('copyVideoButton')!.addEventListener('click', async () => {
    try {
        const video = "video to be converted into gvml"; // Placeholder for actual video data
        const videoBlob = new Blob([video], { type: 'video/mp4' });
        const clipboardItem = new ClipboardItem({ 'video/mp4': videoBlob });
        await navigator.clipboard.write([clipboardItem]);
        alert('Video copied to clipboard');
    } catch (err) {
        console.error('Failed to copy video: ', err);
    }
});

document.getElementById('copyHtmlButton')!.addEventListener('click', async () => {
    try {
        const htmlContent = '<p>Hello, <strong>world!</strong></p>';
        const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
        const clipboardItem = new ClipboardItem({ 'text/html': htmlBlob });
        await navigator.clipboard.write([clipboardItem]);
        alert('HTML copied to clipboard');
    } catch (err) {
        console.error('Failed to copy HTML: ', err);
    }
});

document.getElementById('pasteArea')!.addEventListener('paste', async (event) => {
    event.preventDefault(); // Prevent the default paste action

    let pastedText = ''; // Initialize variables to store pasted content
    let pastedImage = '';
    let pastedAudio = '';
    let pastedVideo = '';
    let pastedHTML = '';

    // Read the clipboard items
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
        // Iterate over each type in the clipboard item
        for (const type of clipboardItem.types) {
            // Get the blob data for the type
            const blob = await clipboardItem.getType(type);
            // Convert the blob data to text
            const data = await blob.text();

            // Handle different types of content
            switch (type) {
                case 'text/plain':
                    pastedText = data;
                    break;
                case 'image/png':
                    pastedImage = data;
                    break;
                case 'audio/mpeg':
                    pastedAudio = data;
                    break;
                case 'video/mp4':
                    pastedVideo = data;
                    break;
                case 'text/html':
                    pastedHTML = data;
                    break;
                // Add more cases as needed
            }
        }
    }

    // Update the output with the pasted content
    document.getElementById('output')!.innerHTML = `
        <h3>Pasted Content:</h3>
        <div>
          <p><strong>Text:</strong> ${pastedText}</p>
          <p><strong>Audio:</strong> ${pastedAudio}</p>
          <p><strong>Video:</strong> ${pastedVideo}</p>
          <p><strong>Image:</strong> ${pastedImage}</p>
          <p><strong>HTML:</strong> ${pastedHTML}</p>
        </div>
    `;
});