import Head from 'next/head';
import React from 'react';
import style from './style.module.scss';
import { Props as TreemapProps } from './Treemap';
import Loading from '../../Loading';

interface Props {
  treemaps: TreemapProps[];
}

const SkillPage: React.FC<Props> = ({ treemaps }) => {
  const [plot, setPlot] = React.useState<JSX.Element[]>(null);
  React.useEffect(() => {
    import('./Treemap').then((module: any) => {
      const Treemap = module.default;

      setPlot(
        treemaps.map((treemapProps, i) => (
          <div
            key={i}
            style={{
              gridArea: `plot${i + 1}`,
            }}
          >
            <Treemap {...treemapProps} />
          </div>
        )),
      );
    });
  }, []);
  return (
    <>
      <Head>
        <title>Skill — Anakin Yuen</title>
        <meta
          name="description"
          content="Skill page of Anakin Yuen's website. Come to see the skills that I've acquired."
        ></meta>
      </Head>
      <div className={style.main}>
        {plot ? (
          plot
        ) : (
          <div className={style.loading}>
            <Loading />
          </div>
        )}
      </div>
    </>
  );
};

export default SkillPage;
