import {
  Description,
  Tile,
  Link,
  Links,
  LinksRow,
  List,
  Name,
  LinksValue,
} from "./styled";

export const Repositories = ({ repositories }) => {
  return (
    <List>
      {repositories.map(({ id, name, description, homepage, html_url }) => (
        <Tile key={id}>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <Links>
            {!!homepage && (
              <LinksRow>
                <dt>Demo:</dt>
                <LinksValue>
                  <Link
                    href={homepage}
                    onClick={(e) => {
                      // TYLKO lewy klik bez modyfikatorów otwieramy bez referrera
                      if (
                        !e.ctrlKey &&
                        !e.metaKey &&
                        !e.shiftKey &&
                        !e.altKey &&
                        e.button === 0
                      ) {
                        e.preventDefault();
                        window.open(homepage, "_blank", "noopener,noreferrer");
                      }
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {homepage}
                  </Link>
                </LinksValue>
              </LinksRow>
            )}
            <LinksRow>
              <dt>Code:</dt>
              <LinksValue>
                <Link target="_blank" rel="noreferrer" href={html_url}>
                  {html_url}
                </Link>
              </LinksValue>
            </LinksRow>
          </Links>
        </Tile>
      ))}
    </List>
  );
};
