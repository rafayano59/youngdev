class AddEmailToContatos < ActiveRecord::Migration[5.2]
  def change
    add_column :contatos, :email, :string
  end
end
