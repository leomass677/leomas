import React, { useState, useEffect } from "react";
import { useSafeReducedMotion } from "../utils/motionVariants";

const ImageWithSkeleton = ({
  src,
  alt,
  wrapperClassName = "",
  imgClassName = "",
  skeletonClassName = "",
  loading = "lazy",
  decoding = "async",
  // Responsive sources: [{ srcSet, type?, media? }]
  sources = null,
  srcSet = undefined,
  sizes = undefined,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [hidePlaceholder, setHidePlaceholder] = useState(false);

  // After the image has faded in, remove the placeholder from the flow
  useEffect(() => {
    if (loaded) {
      const t = setTimeout(() => setHidePlaceholder(true), 380);
      return () => clearTimeout(t);
    }
    setHidePlaceholder(false);
  }, [loaded]);

  const reduce = useSafeReducedMotion();

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!hidePlaceholder && (
        <div
          className={`absolute inset-0 rounded-md liner ${!loaded ? "animate-pulse" : ""} ${skeletonClassName}`}
          style={{
            opacity: loaded ? 0 : 1,
            transition: "opacity 0.35s ease-in-out",
            pointerEvents: "none",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          aria-hidden="true"
        />
      )}

      {sources && Array.isArray(sources) && sources.length > 0 ? (
        <picture>
          {sources.map((s, i) => (
            <source key={i} srcSet={s.srcSet} type={s.type} media={s.media} />
          ))}
          {reduce ? (
            <img
              src={src}
              srcSet={srcSet}
              sizes={sizes}
              alt={alt}
              loading={loading}
              decoding={decoding}
              onLoad={() => setLoaded(true)}
              onError={() => setLoaded(true)}
              className={`block w-full ${imgClassName}`}
              {...props}
            />
          ) : (
            <img
              src={src}
              srcSet={srcSet}
              sizes={sizes}
              alt={alt}
              loading={loading}
              decoding={decoding}
              onLoad={() => setLoaded(true)}
              onError={() => setLoaded(true)}
              style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.38s ease-out",
              }}
              className={`block w-full ${imgClassName}`}
              {...props}
            />
          )}
        </picture>
      ) : reduce ? (
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={loading}
          decoding={decoding}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`block w-full ${imgClassName}`}
          {...props}
        />
      ) : (
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={loading}
          decoding={decoding}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.38s ease-out",
          }}
          className={`block w-full ${imgClassName}`}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithSkeleton;
