class AddPhoneToContatos < ActiveRecord::Migration[5.2]
  def change
    add_column :contatos, :phone, :integer
  end
end
