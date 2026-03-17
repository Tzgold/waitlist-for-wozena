/**
 * Animated dark fluid / 3D-blob background.
 * Inspired by the premium dark organic-shape aesthetic in the reference image.
 * All blobs are extremely dark (barely lighter than the background) to keep
 * the monochrome, volumetric look.
 */
export default function FluidBackground() {
  return (
    <div className="fluid-bg" aria-hidden="true">
      <div className="fluid-blob fb1" />
      <div className="fluid-blob fb2" />
      <div className="fluid-blob fb3" />
      <div className="fluid-blob fb4" />
      <div className="fluid-blob fb5" />
      {/* Very subtle noise overlay for texture */}
      <div className="fluid-noise" />
    </div>
  )
}
