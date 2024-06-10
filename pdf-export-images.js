import { exportImages } from 'pdf-export-images';

exportImages('./Erik Pruger Delivery.pdf', 'images')
    .then(images => console.log('Exported', images.length, 'images'))
    .catch(console.error);
