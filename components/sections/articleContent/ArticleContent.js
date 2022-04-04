import Section from "../../utils/section/Section"
import classes from './ArticleContent.module.css'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from '../../utils/syntaxHighlight/SyntaxHighlight'
import remarkUnwrapImages from 'remark-unwrap-images'

const ArticleContent = (props) => {
    return (
        <Section className={classes.articleContent}>
            <ReactMarkdown remarkPlugins={[remarkUnwrapImages]} className={classes.markdown} components={SyntaxHighlighter}>{props.content}</ReactMarkdown>
        </Section>
    )
}

export default ArticleContent