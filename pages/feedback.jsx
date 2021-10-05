import FeedbackApi from '@/modules/feedback/api/feedback'

export { default } from '@/modules/feedback'

export async function getStaticProps() {
    const response = await FeedbackApi.getAll()
    const recipients = response.data

    return {
        props: { recipients },
    }
}
