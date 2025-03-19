
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { toast } from 'sonner';

export const generatePDF = async (elementId: string, filename: string): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) {
    toast.error('Could not find the element to generate PDF');
    return;
  }

  try {
    toast.info('Preparing your PDF...');
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    const legBoxes = element.querySelectorAll('.leg-box');
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();
    
    // Clone the element to manipulate it without affecting the displayed content
    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.width = `${width}mm`;
    
    // Handle one leg box at a time to ensure they don't break across pages
    for (let i = 0; i < legBoxes.length; i++) {
      const legBox = legBoxes[i];
      
      // Create a temporary container with only the current leg box
      const tempContainer = document.createElement('div');
      tempContainer.style.width = `${width}mm`;
      tempContainer.style.padding = '10mm';
      tempContainer.style.backgroundColor = 'white';
      
      // For the first leg, include the header and info sections
      if (i === 0) {
        const header = element.querySelector('.aviation-header')?.cloneNode(true);
        const info = element.querySelector('.itinerary-section')?.cloneNode(true);
        if (header) tempContainer.appendChild(header);
        if (info) tempContainer.appendChild(info);
      }
      
      tempContainer.appendChild(legBox.cloneNode(true));
      
      // Temporarily add to the document to capture
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      document.body.appendChild(tempContainer);
      
      // Convert to canvas and add to PDF
      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      
      // Add a new page if it's not the first leg
      if (i > 0) {
        pdf.addPage();
      }
      
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      
      // Clean up
      document.body.removeChild(tempContainer);
    }
    
    pdf.save(filename);
    toast.success('PDF downloaded successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
    toast.error('Failed to generate PDF. Please try again.');
  }
};
