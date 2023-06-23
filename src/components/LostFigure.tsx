import React, { FC } from 'react';
import { Figure } from '../models/figures/Figure';

interface LostFigureProps {
  title: string;
  figures: Figure[];
}

const LostFigure: FC<LostFigureProps> = ({ title, figures }) => {
  return (
    <div className="lost">
      <h3>{title}</h3>
      {figures.map((fig) => (
        <div key={fig.id}>
          {fig.name} {fig.logo && <img height={20} width={20} src={fig.logo} />}
        </div>
      ))}
    </div>
  );
};

export default LostFigure;
