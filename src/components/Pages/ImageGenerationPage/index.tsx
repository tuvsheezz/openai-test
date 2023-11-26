import { useContext, useEffect } from 'react';
import { PageTitleContext } from '../../../contexts/PageTitleProvider';

export default function ImageGenerationPage() {
  const { setTitle } = useContext(PageTitleContext);

  useEffect(() => {
    setTitle?.('Image Generation API');
  }, [setTitle]);

  return (
    <div>
      <h1>ImageGenerationpage</h1>
    </div>
  );
}
