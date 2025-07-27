const InscriptionPipelineDetails = () => {
  return (
    <div className="text-white space-y-6">
      <section>
        <h3 className="text-lg font-semibold text-cyan-400">Overview</h3>
        <p className="text-slate-200 text-sm sm:text-base">
          An end-to-end deep learning pipeline for processing and restoring noisy or partially degraded rock inscriptions—such as estampages—into clean, high-fidelity reconstructions. The pipeline focuses on denoising followed by structural reconstruction using GAN-based models. Ground truth labels were created through traditional image processing methods for supervised training.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-cyan-400">Key Features</h3>
        <ul className="list-disc list-inside text-slate-200">
          <li>Denoising of noisy or degraded estampage images</li>
          <li>Reconstruction of lost or unclear inscription regions</li>
          <li>GAN-based generative modeling for structural recovery</li>
          <li>Modular design to swap denoising or reconstruction components</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-cyan-400">Technical Implementation</h3>

        <h4 className="text-md font-semibold text-sky-300 mt-2">Denoising Component</h4>
        <ul className="list-disc list-inside text-slate-200">
          <li>Autoencoders trained on paired noisy-clean samples</li>
          <li>UNet-based denoiser for spatial consistency</li>
          <li>GAN-based denoising for adversarial fine-detail enhancement</li>
          <li>Custom preprocessing for creating clean ground truth from estampages using OpenCV-based filters</li>
        </ul>

        <h4 className="text-md font-semibold text-sky-300 mt-4">Reconstruction Component</h4>
        <ul className="list-disc list-inside text-slate-200">
          <li>pix2pix-based generator to reconstruct missing or unclear regions</li>
          <li>Adversarial loss for realistic output and perceptual quality</li>
          <li>Integration with denoised output for seamless restoration</li>
          <li>Flexible design to support different GAN variants</li>
        </ul>

        <h4 className="text-md font-semibold text-sky-300 mt-4">Evaluation</h4>
        <ul className="list-disc list-inside text-slate-200">
          <li>PSNR and SSIM scores for quantitative denoising evaluation</li>
          <li>Qualitative comparison across denoising methods (AE, UNet, GAN)</li>
          <li>Reconstruction fidelity compared against expert-transcribed inscriptions</li>
        </ul>
      </section>
    </div>
  );
};

export default InscriptionPipelineDetails;
