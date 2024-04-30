
function EmailPanel(): React.ReactElement {
    return (
        <div className="text-center emailPanel p-4" id='emailPanel'>
            <h2 className="mb-4">You're invited to join Taskie!<br />But first - your email.</h2>
            <div className="mb-4">
                Enter the email you'll use for your future Taskie account.
            </div>
            <input className="mb-4 p-2 w-100" type="text" id="emailTextField" placeholder="Your email address"/>

            <button type="button" className="primary-button w-100 p-2">Continue</button>
        </div>
    )
}

export default EmailPanel