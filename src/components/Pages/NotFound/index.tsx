import { Stack } from '@mui/material';
import { useContext, useEffect } from 'react';
import { PageTitleContext } from '../../../contexts/PageTitleProvider';

export default function NotFound() {
  const { setTitle } = useContext(PageTitleContext);

  useEffect(() => {
    setTitle?.('エラー');
  }, []);

  return (
    <Stack alignItems="center">
      <h4>ページが見つかりませんでした。</h4>
    </Stack>
  );
}
