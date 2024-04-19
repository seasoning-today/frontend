export default function useFallBackImage() {
  const onLoadFallBackImage = (event) => {
    event.target.src = event.target.src.replace(`resize`, `origin`);
  };

  return { onLoadFallBackImage };
}
