import React from 'react';
import { Container, Layout } from '../components';
import { INote } from '../components/notes/note';
import NotesComponent from '../components/notes/notes';

/**
 * Blog page `/blog`
 */

type Props = {
  notes: INote[];
};

const Notes = ({ notes }: Props) => {
  return (
    <Layout
      pageTitle="Notes"
      pathname="/notes"
      pageDescription="Quick and Scrappy learning notes and documentation. Things I'm learning about ReactJS, Product Design, React Native and NodeJS"
    >
      <Container width="narrow">
        <p className="page-intro">
          Quick and Scrappy thoughts and learning notes. Things I randomly bump
          into and don't want to forget.
        </p>

        <NotesComponent notes={notes} basePath="notes" />
        {/* <Cards data={notes} basePath="notes" /> */}
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { getContentList } = await import('../lib/content');
  const notes = getContentList('notes');
  return {
    props: { notes },
  };
};

export default Notes;
