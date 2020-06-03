import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FaTag } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import * as S from './styles';

const PostCard = ({
  title,
  excerpt,
  tags,
  date,
  featuredImgFluid,
  timeToRead,
  slug,
}) => {
  const formattedDate = useMemo(() => {
    return format(parseISO(date), "dd 'de' MMMM 'de' yyyy", { locale: pt });
  }, [date]);

  const timeToReadLabel = useMemo(() => {
    return `Leitura de ${timeToRead} minuto${timeToRead > 1 ? 's' : ''}`;
  }, [timeToRead]);

  return (
    <S.LinkWrapper to={`/blog${slug}`}>
      <S.Content>
        <h2>{title}</h2>
        <p>{excerpt}</p>

        <div>
          <FaTag color="#424242" size={14} />
          <S.Tags>
            {tags.map((tag) => (
              <li key={tag}>
                <span>{tag}</span>
              </li>
            ))}
          </S.Tags>
        </div>

        <small>
          {formattedDate} - {timeToReadLabel}
        </small>
      </S.Content>

      <S.ImageContainer>
        <img src={featuredImgFluid.src} alt="Post cover" />
      </S.ImageContainer>
    </S.LinkWrapper>
  );
};

PostCard.propTypes = {
  excerpt: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  featuredImgFluid: PropTypes.shape({
    src: PropTypes.string,
  }).isRequired,
};

export default PostCard;
