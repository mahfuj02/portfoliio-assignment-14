import styled from 'styled-components';
import { SectionTitle, SectionDescription, Underline } from '../styles/SharedComponents';

const DevSetupSection = styled.section`
  background-color: var(--color-white);
`;

const SetupContainer = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SetupCard = styled.div`
  background-color: var(--color-light);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 992px) {
    &:nth-child(3) {
      grid-column: span 2;
    }
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--color-secondary);
  `;

const CardContent = styled.div``;

const SubTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;
  color: var(--color-primary);
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const CodeBlock = styled.pre`
  background-color: var(--color-secondary);
  color: var(--color-white);
  padding: 1rem;
  border-radius: 4px;
  font-family: monospace;
  overflow-x: auto;
  margin: 1rem 0;
`;

const Text = styled.p`
  margin-bottom: 1rem;
`;

const DevSetup = () => {
  return (
    <DevSetupSection>
      <div className="container">
        <SectionTitle>DEVELOPER SETUP</SectionTitle>
        <Underline />
        
        <SectionDescription>
          An overview of my preferred development environment, tools, and configurations that I use
          for web development.
        </SectionDescription>
        
        <SetupContainer>
          <SetupCard>
            <CardTitle>VS Code Setup</CardTitle>
            <CardContent>
              <SubTitle>Extensions</SubTitle>
              <List>
                <ListItem>ESLint - JavaScript linting</ListItem>
                <ListItem>Prettier - Code formatter</ListItem>
                <ListItem>Live Server - Local development server</ListItem>
                <ListItem>Auto Rename Tag - HTML tag editing</ListItem>
                <ListItem>JavaScript (ES6) code snippets</ListItem>
                <ListItem>CSS Peek - CSS selector navigation</ListItem>
                <ListItem>GitLens - Git visualization</ListItem>
                <ListItem>Material Icon Theme - File icons</ListItem>
              </List>
              
              <SubTitle>Theme</SubTitle>
              <Text>One Dark Pro theme with custom color adjustments for better contrast</Text>
              
              <SubTitle>Settings</SubTitle>
              <CodeBlock>{`{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme"
}`}</CodeBlock>
            </CardContent>
          </SetupCard>
          
          <SetupCard>
            <CardTitle>Terminal Setup</CardTitle>
            <CardContent>
              <SubTitle>Shell</SubTitle>
              <Text>Git Bash (Windows) / Zsh with Oh My Zsh (macOS/Linux)</Text>
              
              <SubTitle>Terminal Customization</SubTitle>
              <List>
                <ListItem>PowerLevel10k theme for Zsh</ListItem>
                <ListItem>Custom aliases for common commands</ListItem>
                <ListItem>Auto-suggestions and syntax highlighting</ListItem>
              </List>
              
              <SubTitle>Common Aliases</SubTitle>
              <CodeBlock>{`alias gs='git status'
alias gl='git log'
alias ga='git add'
alias gc='git commit -m'
alias gp='git push'
alias gpl='git pull'
alias nrd='npm run dev'
alias nrs='npm run start'
alias nrb='npm run build'`}</CodeBlock>
            </CardContent>
          </SetupCard>
          
          <SetupCard>
            <CardTitle>Preferred Editor Font</CardTitle>
            <CardContent>
              <SubTitle>Primary Font</SubTitle>
              <Text>Fira Code - A monospaced font with programming ligatures</Text>
              
              <SubTitle>Font Settings</SubTitle>
              <CodeBlock>{`{
  "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 24
}`}</CodeBlock>
              
              <SubTitle>Alternatives</SubTitle>
              <List>
                <ListItem>JetBrains Mono - Clean and highly readable</ListItem>
                <ListItem>Cascadia Code - Modern with programming ligatures</ListItem>
                <ListItem>Roboto Mono - Classic and minimal</ListItem>
              </List>
            </CardContent>
          </SetupCard>
        </SetupContainer>
      </div>
    </DevSetupSection>
  );
};

export default DevSetup;