// app/photoEditor.tsx

const PhotoEditorDetails = () => {
  return (
    <div className="text-white space-y-6">
      <section>
        <h3 className="text-lg font-semibold text-cyan-400">Overview</h3>
        <p className="text-slate-200 text-sm sm:text-base">
          A comprehensive photo editing application built with Python, featuring a user-friendly interface and a wide range of image processing capabilities. The application uses OpenCV for advanced image manipulation and Tkinter for the graphical user interface.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-cyan-400">Key Features</h3>
        <ul className="list-disc list-inside text-slate-200">
          <li>Multiple filter effects</li>
          <li>Image cropping and resizing</li>
          <li>Contrast and brightness adjustment</li>
          <li>Special effects (X-ray, Pencil Sketch)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-cyan-400">Technical Implementation</h3>

        <h4 className="text-md font-semibold text-sky-300 mt-2">Basic Filters</h4>
        <ul className="list-disc list-inside text-slate-200">
          <li>Black and White</li>
          <li>Sepia Tone</li>
          <li>Pencil Sketch</li>
          <li>X-ray Effect</li>
        </ul>

        <h4 className="text-md font-semibold text-sky-300 mt-4">Image Adjustments</h4>
        <ul className="list-disc list-inside text-slate-200">
          <li>Brightness Control</li>
          <li>Contrast Adjustment</li>
          <li>Image Sharpening</li>
          <li>Image Cropping</li>
        </ul>

        <h4 className="text-md font-semibold text-sky-300 mt-4">User Interface</h4>
        <ul className="list-disc list-inside text-slate-200">
          <li>File Upload Dialog</li>
          <li>Filter Selection</li>
          <li>Preview Window</li>
          <li>Adjustment Controls</li>
        </ul>
      </section>
    </div>
  );
};

export default PhotoEditorDetails;
