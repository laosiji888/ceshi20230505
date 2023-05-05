window.addEventListener('viewerLoaded', () => {
    const docViewer = readerControl.docViewer;
    const annotManager = docViewer.getAnnotationManager();

    // Add customization here
    docViewer.setMargin(20);
    docViewer.on('fitModeUpdated', fitMode => {
        console.log('fit mode changed');
    });

    readerControl.disableElement('searchButton');
    readerControl.setTheme('dark');
});

window.addEventListener('documentLoaded', () => {
    const docViewer = readerControl.docViewer;
    const annotManager = docViewer.getAnnotationManager();

    // Add customization here
    // Draw rectangle annotation on first page
    // "Annotations" can be directly accessed since we're inside the iframe
    const rectangle = new Annotations.RectangleAnnotation();
    rectangle.PageNumber = 1;
    rectangle.X = 100;
    rectangle.Y = 100;
    rectangle.Width = 250;
    rectangle.Height = 250;
    rectangle.Author = annotManager.getCurrentUser();
    annotManager.addAnnotation(rectangle);
    annotManager.drawAnnotations(rectangle.PageNumber);
})