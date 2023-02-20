export const counterBtn = () => {
  return (
    <>
      <button type="button" aria-label="카운트 1 증가">
        +
      </button>
      <output aria-live="polite">0</output>
      <button type="button" aria-label="카운트 1 감소">
        -
      </button>
    </>
  );
};
