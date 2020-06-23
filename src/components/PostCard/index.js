import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { FaTag } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { isMobile, BrowserView } from 'react-device-detect';

import { ThemeContext } from 'styled-components';
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
  const theme = useContext(ThemeContext);

  const formattedDate = useMemo(() => {
    return format(parseISO(date), "dd 'de' MMMM 'de' yyyy", { locale: pt });
  }, [date]);

  const timeToReadLabel = useMemo(() => {
    return `Leitura de ${timeToRead} minuto${timeToRead > 1 ? 's' : ''}`;
  }, [timeToRead]);

  const parsedDescription = useMemo(() => {
    if (isMobile) {
      return `${excerpt.substring(0, 80)}...`;
    }

    return excerpt;
  }, [excerpt]);

  return (
    <S.Container to={`/blog${slug}`}>
      <S.Content>
        <h2>{title}</h2>
        <p>{parsedDescription}</p>

        <div>
          <FaTag color={theme.colors.postCard.tags.tag} size={14} />
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

      <BrowserView>
        <S.ImageContainer>
          <img src={featuredImgFluid.src} alt="Post cover" />
        </S.ImageContainer>
      </BrowserView>
    </S.Container>
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
