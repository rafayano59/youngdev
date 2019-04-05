# Preview all emails at http://localhost:3000/rails/mailers/message_mailer
class ContatoMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/message_mailer/contact_me
  def contact_me 
    contato = Contato.new name: 'marflar', 
                          email: 'marflar@example.org',
                          message: 'This is the body of the email'

    ContatoMailer.contact_me contato
  end

end