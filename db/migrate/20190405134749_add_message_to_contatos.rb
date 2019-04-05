class AddMessageToContatos < ActiveRecord::Migration[5.2]
  def change
    add_column :contatos, :message, :string
  end
end
